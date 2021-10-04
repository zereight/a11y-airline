import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <Link href="/SpinButton">SpinButton</Link>
      </div>
      <div>
        <Link href="/Carousel">Carousel</Link>
      </div>
      <div>
        <Link href="/Nav">Nav</Link>
      </div>
    </div>
  );
};

export default Home;
