interface TypeofDATA {
    id: number,
    name: string
  }
  export async function AsynWork(): Promise<TypeofDATA[]> {
    const get_data = await fetch('https://jsonplaceholder.typicode.com/users')
  
    return get_data.json();
  }

  export async function asyWork21(id:any):Promise<TypeofDATA[]>{
    const get_data2=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return get_data2.json()
  }