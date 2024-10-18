export function makeInitials(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return initials.toUpperCase();
}

export function makeFormData(data: Record<string, any>) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v: any) => {
        formData.append(key, v);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
}
