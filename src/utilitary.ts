interface User {
    id: number;
    name: string;
}

const updateUser: Partial<User> = {name: "Pedro"}; // id não é obrigatório
const user: User = {id: 1, name: "Pedro"};
const userRequired: Required<User> = {id: 1, name: "Pedro"}; // tudo é obrigatório
const userReadonly: Readonly<User> = {id: 1, name: "Pedro"}; // torna as propriedades imutáveis
// userReadonly.id = 2; // Isso causará um erro de compilação

type Status = "active" | "inactive" | "deleted";
type ActiveStatus = Exclude<Status, "deleted">; // remove "deleted" do tipo Status
type BasicStatus = Extract<Status, "active" | "inactive">;

type Name = string | null | undefined;
type ValidName = NonNullable<Name>; // remove null e undefined de Name