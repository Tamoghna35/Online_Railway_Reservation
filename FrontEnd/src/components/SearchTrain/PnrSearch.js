const PnrSearch = (props) => {
  return (
    <div>
      <h1 className="ui header" style={{ color: "#2B3080" }}>
        PNR SEARCH
      </h1>
      <div className="ui fluid action input">
        <input type="text" placeholder="PNR " />
        <div className="ui button">Search</div>
      </div>
    </div>
  );
};

export default PnrSearch;
