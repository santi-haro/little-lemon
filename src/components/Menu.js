import React from 'react'
import recipes from '../extras/recipes'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export default function Menu() {

        const handleOrder = (id) => {
            console.log(id, "id is clicked");

            Swal.fire({
                title: 'Add to Cart?',
                text: "This item will be added to your cart",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#638f2b',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Order it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Ordered!',
                    'Your order has been processing',
                    'success'
                  )
                }
              })

        }

  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This weeks specials!</h2>
            <Link to={"/menu"}><button>Online Menu</button></Link>
        </div>

        {/* MENU CARDS*/}

        <div className='cards'>
            {
                recipes.map(recipe =>
                <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt={recipe.title}/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>${recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>
                </div>)

            }
        </div>
    </div>
  )
}

