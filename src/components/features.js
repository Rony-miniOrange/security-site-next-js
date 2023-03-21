import cardList from './card';

  const feature = () => (
    <>
    <div className="flow-root">
      <br></br>
    <h1 className="font-bold text-3xl float-left ml-9">Key Features</h1>
    <h6 className="font-bold text-orange-500 float-right mr-24">See More</h6>
    </div>
    <br></br><br></br><br></br>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 ml-8 mr-8">
    {cardList.map(card => (
      <>
      <div className="info flex justify-center flex-col py-2 px-5 border rounded-lg shadow-md">

            <img src={card.img} className="icons"/>         
            <h4 className="text-black-600 font-bold hover:text-black-800 bottom-0">{card.title}</h4>
            <p className="text-black-500 text-sm py-4">{card.text}</p>
        </div></>
    ))}
  </div>
  </>
  );
  
  export default feature;