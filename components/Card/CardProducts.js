


import CardContentServices from './CardContentServices';

function CardProducts({mockData2}) {
  
    return (
      <div
        className="flex w-full justify-center items-center"
      >
       
        <div className="flex md:flex-grow flex-col justify-between space-y-8">
          <CardContentServices mockData2={mockData2} />
        </div>
      </div>
    );
}

export default CardProducts
