import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import cheerio from "cheerio";

// export default async function GET() {
//   const url = "https://www.codechef.com/users/breathe_code";
//   const response = await axios.get(url);
//   const $ = cheerio.load(response.data);
//   const ranking = $(".rating-number:eq(0)").text();
//   return NextResponse.json(ranking);
// }

export async function GET() {
    const url = "https://www.codechef.com/users/breathe_code";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const ranking = $(".rating-number:eq(0)").text();
    return new Response(ranking, { status: 200 });
}
