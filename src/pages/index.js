import { Inter } from "next/font/google";
import Image from "next/image";
import MainLayout from "../components/mainLayout";
import Concert from "public/ConcertHall.jpg";

const inter = Inter({ subsets: ["latin"] });

const eventData = [
  {
    Title: "Beethoven's Greatest Works",
    Type: "Master’s Performance",
    Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],
    Image: (
      <Image src={Concert} alt={"Header Picture for Bob’s Orchestra Hall"} />
    ),
    Description: "Come witness this amazing performance.",
  },
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div>
        <MainLayout eventInformation={eventData} />
      </div>
    </main>
  );
}
