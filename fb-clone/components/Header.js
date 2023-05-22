import Image from "next/image";
import {
  HomeIcon,
  UserGroupIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  FlagIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const {data:session} = useSession();
  return (
    <div className="sticky top-0 z-50 lg:px-5 shadow-md bg-white flex items-center p-2">
      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me" width={40} height={40} />
        <div className="flex ml-2 items-center bg-gray-100 rounded-full p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search facebook"
            className="hidden md:inline-flex ml-2 flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex justify-end items-center sm:space-x-2">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          
        />
        <p className="font-semibold pr-3 whitespace-nowrap">
          {session.user.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

// export default Header;
