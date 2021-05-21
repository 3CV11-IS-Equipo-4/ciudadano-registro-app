export default function RowData({label1,data1,label2,data2,label3,data3}){
    return (
        <div className="d-flex justify-content-between">
            <div className="col-3">
                <p className="fw-bold">{label1}</p>
                <p>{data1}</p>
            </div>
            <div className="col-3">
                <p className="fw-bold">{label2}</p>
                <p>{data2}</p>
            </div>
            <div className="col-3">
                <p className="fw-bold">{label3}</p>
                <p>{data3}</p>
            </div>
        </div>
    );
}