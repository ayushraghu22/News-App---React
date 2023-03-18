import React from 'react'

let NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props; // destructuring.(this.props is an object).
    return (
        <div>
            <div className="card my-3" style={{ border: "1px solid black" }}>
                <span className="badge rounded-pill bg-danger" style={{
                    position: 'absolute',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }} >{source}</span>

                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.length < 45 ? title : title.slice(0, 45) + "..."}</h5>
                    <p className="card-text">{description.length < 88 ? description : description.slice(0, 88) + "..."}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div >
    )

}

export default NewsItem;

/*
*** props can be used in two ways->
1. using destructuring.
2. using direclty {this.props.title} at the required position.
 */