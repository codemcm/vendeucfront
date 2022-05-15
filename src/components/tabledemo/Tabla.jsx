import Table from 'react-bootstrap/Table'
export default function Tabla(){

    return(
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>@Marcos</td>
      <td>mdo123</td>
    </tr>
    <tr>
      <td>2</td>
      <td>@Daniela</td>
      <td>fat58</td>
    </tr>
    <tr>
      <td>3</td>
      <td>@Javier</td>
      <td>twitter0</td>
    </tr>
  </tbody>
</Table>
        </div>

    );
}