export function getCookie(target: string) {
  const cookies = document.cookie;
  const cookieList = cookies.split('; ');

  for (const cookie of cookieList) {
    const [name, value] = cookie.split('=');

    if (name === target) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
