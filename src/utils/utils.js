export const isFoodcheriService = (service) => {
  return service === "foodcheri";
};

export const isFridgeService = (service) => {
  return service === "fridge";
};

export function toOneText(text) {
  if (text == null) {
    return undefined;
  }
  let value = "";
  //Normalize is not supported in some IE versions - so if IE don't normalize
  if (!document.documentMode) {
    value = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return value
    .replace(/ /g, "_")
    .replace("'", "_")
    .replace(",", "")
    .toLowerCase();
}
