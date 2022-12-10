import Image from "next/image";
import { useRouter } from "next/router";
import ProgressBar from "./ProgressBar";

export default function Cards(data) {
  let dateText = data.items?.createdAt;

  let date = new Date(dateText);

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/fundraisers/" + data.items?._id);
      }}
      className="inline-block w-80 overflow-hidden bg-white rounded-lg shadow-lg my-5 mr-7 h-[500px] "
    >
      <Image
        className="object-cover object-center w-full h-56"
        src={
          data.items?.images[0] != null
            ? data.items.images[0]
            : "/images/patient.jpg"
        }
        alt="avatar"
        width={1250}
        height={750}
      />

      <div className="flex items-left px-2 py-2 bg-white">
        <h1 className="mx-3 text-lg font-semibold text-white">
          <ProgressBar
            goal={data.items?.goal}
            percent={data.items?.percent}
            currentValue={data.items?.currentValue}
          />
        </h1>
      </div>

      <div className="px-5 pb-4">
        <div className=" h-36">
          <h1 className="text-xl font-semibold text-gray-800 text-left whitespace-normal ">
            {data.items?.title}
          </h1>

          <p className="py-2 text-gray-700 break-words mx-auto whitespace-normal">
            {data.items?.long_description?.length > 40
              ? data.items?.long_description?.substring(0, 80 - 2) + "..."
              : data.items?.long_description}
          </p>
        </div>

        <div className="flex items-center mt-4 text-gray-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>

          <h1 className="px-2 text-sm">{timeSince(date)} ago</h1>
        </div>
      </div>
    </div>
  );
}
