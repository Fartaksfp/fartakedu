import { toJalaali } from 'jalaali-js';

export function toShamsi(dateString: string) {
  const date = new Date(dateString);

  const gy = date.getFullYear();
  const gm = date.getMonth() + 1; 
  const gd = date.getDate();

  const { jy, jm, jd } = toJalaali(gy, gm, gd);

  return `${jy}/${jm}/${jd}`;
}