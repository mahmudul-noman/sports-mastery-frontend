import React from 'react';

const demo = () => {
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="text-sm tracking-widest text-pink-700">SL</th>
                        <th className="text-sm tracking-widest text-pink-700">Seller Name</th>
                        <th className="text-sm tracking-widest text-pink-700">Toy Name</th>
                        <th className="text-sm tracking-widest text-pink-700">Toy Category</th>
                        <th className="text-sm tracking-widest text-pink-700">Toy Price</th>
                        <th className="text-sm tracking-widest text-pink-700">Available Quantity</th>
                        <th className="text-sm tracking-widest text-pink-700">Details</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        searchedToys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.toyName}</td>
                                <td>$ {toy.toyPrice}</td>
                                <td>{toy.quantity} PCS</td>
                                <td><Link to={`/singleToy/${toy._id}`}><button className="tracking-widest btn border-0 bg-gradient-to-r from-yellow-400 to-yellow-500">Details</button></Link></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default demo;