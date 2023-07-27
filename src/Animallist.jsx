export function ListAnimals(){
    let animals = ['Cat',"Dog","Lion","Elephant","Rendering Elements Using ReadyMade-List"];
    let animalz = animals.map((animal) => <li key={animal} >{animal}</li>);

    return <>
    <h1>This is a Random Animal List</h1>
    <ol>
        {animalz}
    </ol>
    </>
}