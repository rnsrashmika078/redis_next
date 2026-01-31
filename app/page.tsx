type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    geneder: "female" | "male";
    email: string;
    username: string;
    password: string;
    birthDate: Date;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
};
import Image from "next/image";

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/users`, {});
    const result = await res.json();
    const users = result.users as UserType[];
    console.log(result.message);
    // console.log(users);
    return (
        <main>
            <div className="p-5">
                {users?.slice(0, 5)?.map((u: UserType, i: number) => (
                    <div key={i} className="flex border p-2 gap-5">
                        <Image
                            src={u.image}
                            alt="userImage"
                            width={50}
                            height={50}
                        />
                        <div className="">
                            <p className="font-bold ">{u.username}</p>
                            <p className="text-gray-400 text-xs">{u.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
