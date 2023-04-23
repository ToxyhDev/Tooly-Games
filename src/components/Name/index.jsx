import Dice from '../../assets/dice.png'

const alt = 'Dés'

function Name() {
  return (
    <section className="name">
      <h1 className="name__letters">T</h1>
      <img className="name__dice" src={Dice} alt={alt} />
      <img className="name__dice" src={Dice} alt={alt} />
      <h1 className="name__letters">ly</h1>
    </section>
  )
}
export default Name
