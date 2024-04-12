export const filterManager = (TableData: any) => {
  return TableData.reduce((unique: any, item: any) => {
    // Check if the name already exists in the result array
    let exists = unique.some(
      (i: any) => i.projectManagerName === item.projectManagerName
    );
    // If the name doesn't exist, add it to the result array
    if (!exists) {
      unique.push(item);
    }
    return unique;
  }, []);
};

export const filterResources = (TableData: any) => {
  return TableData.reduce((unique: any, item: any) => {
    // Check if the name already exists in the result array
    let exists = unique.some((i: any) => i.Resources === item.Resources);
    // If the name doesn't exist, add it to the result array
    if (!exists) {
      unique.push(item);
    }
    return unique;
  }, []);
};

export function combineValues(arr: any) {
  let resources: any = [];
  let nonResources: any = [];

  arr.forEach((item: any) => {
    if (item.isResources) {
      resources.push(item.value);
    } else {
      nonResources.push(item.value);
    }
  });

  let result = [];

  // Check if there are any values for resources and non-resources
  if (resources.length > 0) {
    result.push({ val: resources.join(", "), title: "Resources" }); // Combine resources into a single string
  }
  if (nonResources.length > 0) {
    result.push({ val: nonResources.join(", "), title: "Project Manager" }); // Combine non-resources into a single string
  }

  return result;
}

export function splitValues(
  combinedArray: any
): { isResources: boolean; value: string }[] {
  let result: { isResources: boolean; value: string }[] = [];

  combinedArray.forEach((item: any) => {
    const values = item.val.split(",").map((value: any) => value.trim());
    values.forEach((value: any) => {
      if (item.title === "Resources") {
        result.push({ isResources: true, value });
      } else if (item.title === "Project Manager") {
        result.push({ isResources: false, value });
      }
    });
  });

  return result;
}
