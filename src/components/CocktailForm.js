import React, { useEffect, useRef} from 'react'

const CocktailForm = ({ setSearchTerm }) => {
    const serachValue = useRef("")

    useEffect(() => {
        serachValue.current.focus()
    }, [])
    const handleSubmit = (e)=> e.preventDefault()
    const handleChange = () => setSearchTerm(serachValue.current.value)

    return (
        <section className="section">
            <h2 className="section-title">search cocktails</h2>
            <form className="form search-form" onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        ref={serachValue}
                    />
                </div>
                
            </form>
        </section>
    )
}

export default CocktailForm