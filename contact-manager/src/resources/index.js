export function configure(config) {
  config.globalResources(['./elements/loading-indicator']); //set as global resource, so we do not need to require this element in every view.
}
