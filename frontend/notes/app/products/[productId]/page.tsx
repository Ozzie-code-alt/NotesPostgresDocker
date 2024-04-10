export default function ProductsList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Details About the Product {params.productId}</h1>
    </div>
  );
}
