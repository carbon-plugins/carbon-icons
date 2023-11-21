import DOMPurify from 'dompurify';
//import Editor from '@monaco-editor/react';

// WordPress dependencies
import {
	InspectorControls, useBlockProps, BlockControls,
} from '@wordpress/block-editor';
import { useState, useRef, useEffect, useMemo } from '@wordpress/element';
import {
	PanelBody, RangeControl, TextareaControl,
	ToolbarGroup, ToolbarButton, Button, Popover,
	Modal, SearchControl, MenuItem, MenuGroup, Notice, SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { __, _n, sprintf } from '@wordpress/i18n';
import { Icon, justifyLeft, justifyCenter, justifyRight, rotateRight, flipHorizontal, flipVertical } from '@wordpress/icons';

//Internal dependencies
import '/src/assets/styles/icon-modal.scss';
import '/src/assets/styles/inserter-modal.scss';
import './editor.scss';
import { heroicons } from '/src/assets/icons/heroicons';
import { dashicons } from '/src/assets/icons/dashicons';
import { wordpress } from '/src/assets/icons/wordpress';

import { ConditionalRender } from "./../../assets/components/conditionals";
import { Link, LinkToolbarButton } from "./../../assets/components/Link";

const iconLibraries = {
	heroicons,
	dashicons,
	wordpress
};

export default function edit(props) {
	const { attributes, setAttributes } = props;
	const { strokeWidth, size, rotation, post, widthType, iconLibrary, icon, alignment, isFlippedHorizontally, isFlippedVertically, showAlignment } = attributes;

	const URLPopoverRef 																= useRef();
	const popoverRef 																		= useRef();
  const scrollContainerRef 														= useRef( null );
  const previewRef 																		= useRef( null );
	const [ showURLPopover, setURLPopoverVisibility ] 	= useState( false );
	const [ isModalOpen, setModalVisibilty ] 						= useState( false );
	const [ isPopoverOpen, setPopoverVisibility ] 			= useState( false );
	const [ isInserterVisible, setInserterVisibility ] 	= useState( false );
	const [ hasPreviewed, setHasPreviewed ] 						= useState( false );
	const [ searchInput, setSearchInput ] 							= useState( '' );
	const [ icons, setIcons ] 													= useState( iconLibraries[iconLibrary] );
  const [ loadedIcons, setLoadedIcons ] 							= useState( [] );
	const [ svgString, setSvgString ] 									= useState( '' );
	const [ errorMessage, setErrorMessage ] 						= useState( '' );
	const [ tempSvg, setTempSvg ] 											= useState( '' );
	const [ previewSize, setPreviewSize ] 							= useState( 40 );

	const categories = useMemo(() => {
		const cat = [];
		for (const item of icons) {
			if (!cat.includes(item.category)) {
				cat.push(item.category);
			}
		}
		return cat.sort();
	}, [iconLibrary]);

	const [ currentCategory, setCurrentCategory ] = useState( categories[0] );

	useEffect(() => {
		setCurrentCategory( categories[0] )
	}, [categories]);

	useEffect(() => {
		if (scrollContainerRef.current){
			scrollContainerRef.current.scrollTop = 0;
		}
 }, [isModalOpen, currentCategory]);

	useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.dataset.slug;
            const icon = currentIcons.find((item) => item.slug === slug);

            if (icon && !loadedIcons.includes(slug)) {
              setLoadedIcons((prevLoadedIcons) => [...prevLoadedIcons, slug]);
            }
          }
        });
      },
      { rootMargin: `${previewSize * 2}px`}
    );

    const scrollContainer = scrollContainerRef.current;
    const iconElements = scrollContainer?.querySelectorAll('[data-slug]');

    iconElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [isModalOpen, currentCategory, iconLibrary, searchInput]);

	const changeLibrary = iconLibrary => {
		setAttributes( { iconLibrary } )
		setIcons( iconLibraries[iconLibrary] )
	}

	const getCurrentIcons = () => {
		if(searchInput.length >= 3) {
			return icons.filter(icon => {
				const keywords = icon?.keywords && icon.keywords.length > 0 ? icon.keywords : [];
				const searchTerms = [ ...keywords, icon.name.toLowerCase()];
				return searchTerms.find(term => {
					return term.includes(searchInput);
				})
			})
		} else {
			return icons.filter( icon =>  icon.category === currentCategory );
		}
	}

	const handleIconAdd = (icon, strokeWidth, size) => {
		setAttributes({ icon: { ...icon }, strokeWidth, size, rotation: 0 })
		setModalVisibilty( false )
	}

	const currentIcons = useMemo(() => {
		return getCurrentIcons()
	}, [searchInput, currentCategory, iconLibrary, icons]);

	const renderCategories = () => {
		return <MenuGroup>
			{
				categories.map(category => {
					const categoryIcons = icons.filter(icon => {
						return category === "all"
							? true
							: icon.category === category
					});
					return <MenuItem
						key={ category }
						className={{ 'is-active': currentCategory === category }}
						onClick={ () => {
							setCurrentCategory( category )
							setSearchInput( "" )
						} }
						isPressed={ currentCategory === category }
					>
						{ category.charAt(0).toUpperCase() + category.slice(1) }
						<span>
							{ categoryIcons?.length }
						</span>
					</MenuItem>
				})
			}
		</MenuGroup>
	}

	const getAlignmentIcon = () => {
		switch (alignment) {
			case "flex-start":
				return justifyLeft
				break;
			case "center":
				return justifyCenter
			break;
			case "flex-end":
				return justifyRight
			break;
		}
	}

	const rotateIcon = () => {
		if(rotation + 90 >= 360) {
			setAttributes( { rotation: 0 } )
		} else {
			setAttributes( { rotation: rotation + 90 } )
		}
	}

	const handleModalClose = () => {
		setSearchInput( "" );
		setModalVisibilty( false )
	}

	const createSecureSVG = svgString => {
		const svgContainer = document.createElement('div');
		svgContainer.innerHTML = DOMPurify.sanitize(svgString, { USE_PROFILES: { svg: true } });
		const svgElement = svgContainer.querySelector('svg');
		if (!svgElement) {
			throw new Error('Invalid SVG');
		}
		setTempSvg( svgElement.outerHTML );
		return svgElement;
	};

	const handleInserterPreview = event => {
		event.preventDefault();
		if (!svgString) {
			setErrorMessage( __( 'Please enter an SVG string', 'carbon-icons' ) );
			return;
		}
		try {
			renderPreview(svgString);
			setErrorMessage('');
			setHasPreviewed( true );
		} catch (error) {
			setErrorMessage(error.message);
			setHasPreviewed( false );
		}
	};

	const handleInserterAdd = () => {
		setAttributes({ icon: {
			svg: tempSvg,
			isCustom: true
		} })
		setInserterVisibility( false );
		setHasPreviewed( false );
	}

	const renderPreview = (svgString) => {
		const modalPreview = previewRef.current;
		modalPreview.innerHTML = '';

		if (svgString) {
			const svgElement = createSecureSVG(svgString);
			modalPreview.appendChild(svgElement);
		}
	};

	const handleWidthTypeChange = ( widthType ) => {
		setAttributes({ widthType });
		switch (widthType) {
			case "default":
				setAttributes({ size: "40px" });
				break;
			case "full":
				setAttributes({ size: "100%" });
				break;
			case "custom":
				setAttributes({ size: "40px" });
				break;
		}
	}

	const ConditionalIconLink = () => {
		if(icon.isJsx) {
			return <a
				{ ...transformedBlockProps }
				href={ post.url }
				target={ post.opensInNewWindow ? '_blank' : '_self' }
				onClick={ ( e ) => e.preventDefault() }
				title={ icon.name }
				rel="noopener"
			>
				<Icon icon={icon.svg}/>
			</a>
		}
		return <a
			{ ...transformedBlockProps }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
			title={ icon.name }
			href={ post.url }
			target={ post.opensInNewWindow ? '_blank' : '_self' }
			onClick={ e => e.preventDefault() }
			rel="noopener"
		/>
	}

	const ConditionalIconRender = () => {
		if(icon.isJsx){
			return <span { ...transformedBlockProps }>
				<Icon icon={icon.svg}/>
			</span>
		}
		return <span
			{ ...transformedBlockProps }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
		/>
	}

	const blockProps = useBlockProps();
	const transformedBlockProps = useBlockProps({  style: {
		...blockProps.style,
		transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1},
		${isFlippedVertically ? -1 : 1})`,
		width: icon?.svg ? size : "fit-content"
	} });

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", "carbon-icons" ) } initialOpen={ true }>
				<ToggleGroupControl
					__nextHasNoMarginBottom
					isBlock
					label={ __( "Width type", "carbon-icons" ) }
					onChange={ widthType => handleWidthTypeChange( widthType ) }
					value={ widthType }
				>
					<ToggleGroupControlOption
						label={ __( "Default", "carbon-icons" ) }
						value="default"
					/>
					<ToggleGroupControlOption
						label={ __( "Full", "carbon-icons" ) }
						value="full"
					/>
					<ToggleGroupControlOption
						label={ __( "Custom", "carbon-icons" ) }
						value="custom"
					/>
				</ToggleGroupControl>
				<ConditionalRender conditions={ widthType === "custom"}>
					<RangeControl
						label={ __( "Icon size (in px)", "carbon-icons" ) }
						value={ Number(size.replace("px", "")) }
						onChange={ size => setAttributes({ size: `${size}px` }) }
						min={10}
						max={500}
						__nextHasNoMarginBottom
					/>
				</ConditionalRender>
			</PanelBody>
		</InspectorControls>
		{
			icon?.svg
				? <>
					<BlockControls>
						<ToolbarGroup>
							<LinkToolbarButton
								isActive={ post?.url }
								popoverRef={ URLPopoverRef }
								isPopoverOpen={ showURLPopover }
								setPopoverVisibility={ setURLPopoverVisibility }
							/>
							<ToolbarButton
								label={ __( "Rotate icon", "carbon-icons")}
								icon={ rotateRight }
								onClick={ rotateIcon }
							/>
							<ToolbarButton
								label={ __( "Flip horizontally", "carbon-icons")}
								icon={ flipHorizontal }
								onClick={ () => setAttributes({ isFlippedHorizontally: !isFlippedHorizontally }) }
								isActive={ isFlippedHorizontally }
							/>
							<ToolbarButton
								label={ __( "Flip vertically", "carbon-icons")}
								icon={ flipVertical }
								onClick={ () => setAttributes({ isFlippedVertically: !isFlippedVertically }) }
								isActive={ isFlippedVertically }
							/>
							<ConditionalRender conditions={ showAlignment }>
								<ToolbarButton
									icon={ getAlignmentIcon }
									label={ __( "Alignment", "carbon-icons")}
									onClick={ () => setPopoverVisibility(true) }
									ref={ popoverRef }
								/>
							</ConditionalRender>
						</ToolbarGroup>
						<ToolbarGroup>
							<ToolbarButton
								onClick={ () => setModalVisibilty( true ) }
								label={ __( "Change icon", "carbon-icons") }
							>
								{ __( "Change", "carbon-icons" ) }
								</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
					<ConditionalRender conditions={ isPopoverOpen }>
						<Popover
							anchor={ popoverRef.current }
							focusOnMount="firstElement"
							position="bottom right"
							headerTitle={ __( "Alignment Settings", "carbon-icons" ) }
							onClose={ () => setPopoverVisibility(false) }
						>
							<div style={{ padding: '10px', display: "flex" }}>
								<ToolbarButton
									icon={ justifyLeft }
									title={ __( "Left Alignment", "carbon-icons" ) }
									isActive={alignment === 'flex-start'}
									onClick={() => {
										setAttributes({ alignment: 'flex-start' });
										setPopoverVisibility(false);
									}}
								/>
								<ToolbarButton
									icon={ justifyCenter }
									title={ __( "Center Alignment", "carbon-icons" ) }
									isActive={alignment === 'center'}
									onClick={() => {
										setAttributes({ alignment: 'center' });
										setPopoverVisibility(false);
									}}
								/>
								<ToolbarButton
									icon={ justifyRight }
									title={ __( "Right Alignment", "carbon-icons" ) }
									isActive={alignment === 'flex-end'}
									onClick={() => {
										setAttributes({ alignment: 'flex-end' });
										setPopoverVisibility(false);
									}}
								/>
							</div>
						</Popover>
					</ConditionalRender>
					<section style={{ display: "flex", justifyContent: alignment }}>
						{
							post.url
								? <ConditionalIconLink />
								: <ConditionalIconRender />
						}
					</section>
					<Link
						post={ post }
						popoverRef={ URLPopoverRef }
						setAttributes={ setAttributes }
						isPopoverOpen={ showURLPopover }
						setPopoverVisibility={ setURLPopoverVisibility }
					/>
				</>
				: <div { ...transformedBlockProps } style={{ display: "flex", justifyContent: alignment }}>
					<button onClick={ () => setModalVisibilty( true ) } type="button" class="components-button block-editor-button-block-appender" aria-label={ __("Add an icon", "carbon-icons") } style={{ width: "fit-content" }}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
					</button>
				</div>
		}
		<ConditionalRender conditions={ isModalOpen }>
			<Modal
				className="carbon-blocks-icon-modal"
				title={ __( "Add an icon", "carbon-icons" ) }
				onRequestClose={ handleModalClose }
				isFullScreen
			>
				<section>
					<aside className="carbon-blocks-icon-modal__sidebar">
						<section>
							<SearchControl
								value={ searchInput }
								onChange={ setSearchInput }
							/>
							<ConditionalRender conditions={ searchInput && currentIcons?.length > 0 }>
								<Notice status="info" isDismissible={ false } className='carbon-blocks-icon-modal__notice'>
									{
										searchInput.length >= 3
											? sprintf(
												/* translators: %1$s is replaced with the number of results */
												/* translators: %2$s is replaced with the string searched */
												_n( '%1$s result for "%2$s"', '%1$s results for "%2$s"', currentIcons?.length, 'carbon-icons' ),
												currentIcons?.length,
												searchInput,
												'carbon-icons'
											)
											/* translators: %1$s is replaced with the number of results */
											: sprintf( '%1$s more letters before search', 3 - searchInput.length, 'carbon-icons' )
									}
								</Notice>
							</ConditionalRender>
							{
								renderCategories()
							}
						</section>
					</aside>
					<main className='carbon-blocks-icon-modal__content'>
						<header className="carbon-blocks-icon-modal__header">
							<SelectControl
								label={ __( 'Select an icon library', 'carbon-icons' ) }
								value={ iconLibrary }
								onChange={ iconLibrary => changeLibrary( iconLibrary ) }
								options={ [
									{ value: 'heroicons', label: __( 'Classic Icons', 'carbon-icons' ) },
									{ value: 'wordpress', label: __( 'Wordpress icons', 'carbon-icons' ) },
									{ value: 'dashicons', label: __( 'Dashicons', 'carbon-icons' ) },
								] }
							/>
							<RangeControl
                label={ __( "Size", "carbon-icons" ) }
                value={ previewSize }
                onChange={ previewSize => {
									setPreviewSize( previewSize )
									setAttributes({ size: `${previewSize}px` })
									if(widthType != "custom") {
										setAttributes({ widthType: "custom" });
									}
								}}
                min={40}
                max={100}
								__nextHasNoMarginBottom
								className='carbon-blocks-icon-modal__preview'
              />
							<Button isSecondary onClick={ () => setInserterVisibility(true) }>{ icon.isCustom ? __( "Edit custom SVG", "carbon-icons") : __( "Insert custom SVG", "carbon-icons") }</Button>
						</header>
						<ul className="carbon-blocks-icon-modal__icons" ref={scrollContainerRef}>
							{
								currentIcons?.length === 0
									?	<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"/><ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"/><ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"/><path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></g></svg>
										{ __("Sorry, no icons were found for your search.", 'carbon-icons' ) }
									</div>
									: currentIcons.map((icon, index) => (
										<li key={index} data-slug={icon.slug}>
											{
												loadedIcons.includes(icon.slug)
													? <button onClick={() => handleIconAdd(icon, strokeWidth, size)}>
														{
															icon?.isJsx
																?	<span style={{ width: `${previewSize}px` }} >
																	<Icon icon={icon.svg} />
																</span>
																: <span dangerouslySetInnerHTML={{ __html: icon.svg }} style={{ width: `${previewSize}px` }}/>
														}
														{icon.name}
													</button>
													: <div>
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"/></svg>
													</div>
											}
										</li>
									))
							}
						</ul>
					</main>
				</section>
			</Modal>
		</ConditionalRender>
		<ConditionalRender conditions={ isInserterVisible }>
			<Modal
				className="carbon-blocks-inserter-modal"
				title={ __( "Insert an SVG tag", "carbon-icons" ) }
				onRequestClose={ () => setInserterVisibility(false) }
				isFullScreen
			>
				<section className="carbon-blocks-inserter-modal__content">
					<section className="carbon-blocks-inserter-modal__inserter">
						<TextareaControl
							label={ __( "SVG tag", "carbon-icons" ) }
							value={ icon.isCustom ? icon.svg : svgString }
							onChange={ setSvgString }
						/>
						{ /* <Editor
							theme="vs-dark"
							defaultLanguage="html"
							onChange={ setSvgString }
							defaultValue="// some comment"
							value={ icon.isCustom ? icon.svg : svgString }
							className="css-editor"
							loading={ __( "Loading...", 'carbon-icons' ) }
							contextmenu={ false }
							options={{
								inlineSuggest: true,
								fontSize: "16px",
								formatOnType: true,
								autoClosingBrackets: true,
								minimap: { scale: 10 }
							}}
						/> */}
					</section>
					<section className="carbon-blocks-inserter-modal__render">
						<label>
							{ __( "Preview", "carbon-icons" ) }
						</label>
						<div>
							<div style={{ width: size }} className="carbon-blocks-inserter-modal__preview" ref={ previewRef }/>
						</div>
						<ConditionalRender conditions={ errorMessage }>
							<Notice status="error" className="carbon-blocks-inserter-modal__error" onDismiss={() => setErrorMessage("")}>
								{errorMessage}
							</Notice>
						</ConditionalRender>
						<footer>
							<RangeControl
                label={ __( "SVG size (in px)", "carbon-icons" ) }
								value={ Number(size.replace("px", "")) }
								onChange={ size => setAttributes({ size: `${size}px` }) }
                min={40}
                max={500}
								__nextHasNoMarginBottom
              />
							<section className="carbon-blocks-inserter-modal__buttons">
								<ConditionalRender conditions={ svgString }>
									<Button isSecondary onClick={ handleInserterPreview } type="submit">{ __( "Preview icon", "carbon-icons") }</Button>
									<Button isPrimary disabled={ !hasPreviewed } onClick={ handleInserterAdd } type="submit">{ __( "Add icon", "carbon-icons") }</Button>
								</ConditionalRender>
							</section>
						</footer>
					</section>
				</section>
			</Modal>
		</ConditionalRender>
	</>
};
