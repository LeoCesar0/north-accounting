


function TriangleDetail({classes}) {
    return (  
      <div className={`absolute top-0 left-0 right-0 h-8 md:h-24 -translate-y-[95%] ${classes}`} style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}} ></div>
    );
}

export default TriangleDetail;