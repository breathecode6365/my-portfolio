import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://www.codechef.com/users/breathe_code";

  try {
    // Fetching the HTML from the URL
    const response = await axios.get(url);

    // Loading the HTML into cheerio
    const $ = cheerio.load(response.data);

    // Extracting the ranking information
    const ranking = $(".rating-number:eq(0)").text();

    // Returning the ranking as a JSON response
    return NextResponse.json({ ranking });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);

    // Return a 500 status code if something goes wrong
    return NextResponse.json(
      { error: "Failed to fetch ranking" },
      { status: 500 }
    );
  }
}
