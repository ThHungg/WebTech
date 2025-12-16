const getFullImg = (imgPath: string) => {
  if (!imgPath) return "";
  const baseUrl = process.env.NEXT_PUBLIC_URL_IMG;
  console.log("Base URL:", baseUrl);
  return `${baseUrl}/${imgPath}`;
}

export default getFullImg;