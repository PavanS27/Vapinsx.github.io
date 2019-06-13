import React, { Component } from 'react'

 class RecipeSearch extends Component {
    render() {
        const {value, handleSubmit, handleChange }= this.props
        return (
            <>
             <div className="container">
                 <div className="row">
                     <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                         <h1 className="text-slanted text-capitalize">
                             Search for recipe with {" "}<strong className="text-danger">food2fork</strong>
                         </h1>
                         <form className="mt-4" onSubmit={handleSubmit}>
                             <label htmlFor="search" className="text-capitalize">
                                 Type Recipes Seperated by comma
                             </label>
                             <div className="input-group">
                                 <input type="text" name="search" placeholder="Chicken,onions,carrots" className="form-control" value={value} onChange={handleChange}/>
                                 <div className="input-group-append">
                                     <button type="submit" className="input-group-text bg-primary text-white">
                                         <i className="fas fa-glyphicon-search"/>
                                     </button>
                                 </div>
                             </div>
                         </form>
                     </div>
                 </div>

             </div>
            </>
        );
    }
}

export default RecipeSearch
