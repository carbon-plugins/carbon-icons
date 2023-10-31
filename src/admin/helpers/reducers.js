export const reducer = (draft, a) => {
	switch (a.type) {
		// Default
    case "set": {
      draft.options = a.data.options;
      draft.license = a.data.license;
      break;
    }
		case "toggle_activation": {
			draft.options.pluginActive = !draft.options.pluginActive
			break;
		}
		case "toggle_delete_all_on_remove": {
			draft.options.deleteAllOnRemove = !draft.options.deleteAllOnRemove
			break;
		}
		case "set_tour_as_finished": {
			draft.options.tourIsFinished = true;
			break;
		}
	}
}
