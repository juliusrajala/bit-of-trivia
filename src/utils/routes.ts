import produce from 'immer';

export const splitRouteParams = searchString => {
  return searchString
    .split('?')[1]
    .split('&')
    .reduce((curr, next) => {
      const [key, value] = next.split('=')
      return produce(curr, draft => {
        draft[key] = value;
      })
    }, {})
}
