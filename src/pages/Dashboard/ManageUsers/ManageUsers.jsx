import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUsers = () => {
   const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res=await axiosSecure.get('/users',{
              headers: {
                authorization : `Bearer ${localStorage.getItem('access-token')}`
              }
            })
            return res.data
        }
    })

    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now!!`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })
    }


    const handleDeleteUser = user => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then(res =>{
            if(res.data.deletedCount > 0){
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
            }
          })
         
        }
      });
    }
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>User No.{users.length}</th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Make Admin</th>
        <th>Subscription Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index)=> <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {
                    user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-red-200">Make Admin</button>
                }
            </td>
            <td>Subscribe</td>
            <td><button onClick={() => handleDeleteUser(user)} className="btn bg-red-200">Delete</button></td>
          </tr>)
     }
      
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default ManageUsers;