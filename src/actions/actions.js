export const SUGGEST_CHANGES = 'SUGGEST_CHANGES';

export function suggestChanges(newData) {
   return {
      type: SUGGEST_CHANGES,
      payload: newData
   };
}
