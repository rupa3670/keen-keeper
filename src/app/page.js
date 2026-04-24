import { Plus } from 'lucide-react';
export const metadata = {
  title: "Home | keen keeper",

};
export default function Home() {
  return (
  <>
    <div className="flex flex-col justify-center items-center text-center mt-15 mb-8">
      <h2 className="text-5xl font-bold">Friends to keep close in your life </h2>
      <p className="text-gray-500 mt-4 mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
        relationships that matter most.</p>
         <button className="btn bg-[#244D3F] text-white">  <Plus size={18}/>Add Friend</button>
    </div>
   
  </>
  );
}
