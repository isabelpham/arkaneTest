import Image from "next/image";
import OutsideBob from "public/BobOutside.jpg";
import Navbar from "../components/navbar";
import EventCards from "../components/eventCards";

export default function MainLayout(eventData) {
  const mockInfo = eventData.eventInformation;
  let itemNum = 0;
  const eventCards = [];

  for (let i = 0; i < mockInfo.length; i++) {
    for (let j = 0; j < mockInfo[i].Dates.length; j++) {
      itemNum += 1;
      const dateObj = new Date(mockInfo[i].Dates[j]);
      const d = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "US/Pacific",
        hour: "2-digit",
        minute: "2-digit",
      });
      eventCards.push(
        <EventCards
          key={itemNum}
          title={mockInfo[i].Title}
          type={mockInfo[i].Type}
          date={d}
          image={mockInfo[i].Image}
          description={mockInfo[i].Description}
        ></EventCards>
      );
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black relative w-screen h-96">
        <Image
          className="relative w-screen h-96 opacity-60"
          src={OutsideBob}
          alt={"Header Picture for Bob’s Orchestra Hall"}
        />
        <div className="flex flex-col absolute top-20 left-20">
          <h1 className="text-6xl font-bold">Bob’s Orchestra Hall</h1>
          <h1 className="text-4xl font-bold">Seattle, WA</h1>
        </div>
      </div>
      <h1 className="text-4xl font-bold pl-20 pt-20 text-black">
        Upcoming Events
      </h1>
      {eventCards}
    </>
  );
}
