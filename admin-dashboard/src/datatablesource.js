export const userColumns = [
     {field: "id", headerName: "ID", width: 70},
     {
        field: "ownername",
        headerName: "Owner Name",
        width: 230,
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
     },
     {
        field: "email", 
        headerName:"Email",
        width: 230,
     },
     {
        field: "age", 
        headerName:"Age",
        width: 100,
     },
     {
        field: "status", 
        headerName:"Status",
        width: 160,
        renderCell: (params) => {
            return( 
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
            );
        },
     },
];

export const userRows = [
    {
        id: 1,
        username: "Mick",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status: "active",
        email: "mick10@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Vinu",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"active",
        email:"vinu11@gmail.com",
        age:25
    },
    {
        id: 3,
        username: "Jude",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"active",
        email:"jude9@gmail.com",
        age:25
    },
    {
        id: 4,
        username: "Thanu",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"passive",
        email:"thanu12@gmail.com",
        age:25
    },
    {
        id: 5,
        username: "Sam",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"passive",
        email:"sam25@gmail.com",
        age:25
    },
    {
        id: 6,
        username: "Jeasi",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"active",
        email:"jeasi14@gmail.com",
        age:25
    },
    {
        id: 7,
        username: "Dino",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"passive",
        email:"dino99@gmail.com",
        age:25
    },
    {
        id: 8,
        username: "Albert",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"passive",
        email:"albert11@gmail.com",
        age:25
    },
    {
        id: 9,
        username: "Peter",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"active",
        email:"jimmy67@gmail.com",
        age:25
    },
    {
        id: 10,
        username: "John",
        img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
        status:"passive",
        email:"johnes45@gmail.com",
        age:25
    },
]