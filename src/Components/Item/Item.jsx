import "./Item.css";
export default function Item({ items, setItems }) {
  const deleteHandler = (item) => {
    setItems(items.filter((element) => element !== item));
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="eachItem" key={index}>
            <p
              onClick={(event) => {
                event.target.classList.toggle("crossedLine");
              }}
            >
              {item}
            </p>

            <ion-icon
              name="trash-outline"
              onClick={() => {
                deleteHandler(item);
              }}
            ></ion-icon>
          </div>
        );
      })}
    </>
  );
}
