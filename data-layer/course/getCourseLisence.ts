"use server";

import { getUserPhone } from "../user/getUserPhone";

const SPOTPLAYER_KEY = process.env.SPOTPLAYER_KEY!;

export async function getCourseLisence(spot_id: string) {
  const phone = await getUserPhone();

  const response = fetch("https://panel.spotplayer.ir/license/edit/", {
    method: "POST",
    headers: {
      $API: SPOTPLAYER_KEY,
      $LEVEL: "-1",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      test: false,
      course: [spot_id],
      name: "customer",
      watermark: { texts: [{ text: phone }] },
    }),
  });

  if (!(await response).ok){
    console.log((await response));
    
    return false
  }
  else {    
    return (await response).json()
  }
}
