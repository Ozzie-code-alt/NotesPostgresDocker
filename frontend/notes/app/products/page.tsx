import Link from "next/link";
export default function ProductsList() {

    
  return (
    <div>
      <Link href={`/products/${1}`}>
        <h2>Prodcut1</h2>
      </Link>
      <Link href={`/products/${2}`}>
        <h2>Prodcut2</h2>
      </Link>
      <Link href={`/products/${3}`}>
        <h2>Prodcut3</h2>
      </Link>
      <Link href={`/products/${5}`}>
        <h2>Prodcut4</h2>
      </Link>
    </div>
  );
}
