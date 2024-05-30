import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";


const tableData = [
  {
    avatar: "https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fgamer&psig=AOvVaw0tr29nVxx7IhOL1M7nU9hi&ust=1714277139137000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiu8ZDC4YUDFQAAAAAdAAAAABAJ",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAohU8sdV1Uic8p8T5Rbd1gZmtkF0RPHynB9AgvfSlY3C04mWA_Jcx7SQRwm5-d6MoO7g&usqp=CAU",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRdrU8KH-Kj83ofG3tUOXWtwI_rhip9jlE-QTt9hLCSwONxq99hJupXsaof2Olw9AJbU&usqp=CAU",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6J2cdTemmoWos84b_SxNSKySObkygJJWshlLr4Xidu1SihCjYsHhL5U9SmZsrS8JI5kc&usqp=CAU",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card  >
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless >
            <thead>
              <tr >
                <th >Team Lead</th>
                <th >Project</th>

                <th >Status</th>
                <th >Weeks</th>
                <th >Budget</th>
              </tr>
            </thead>
            <tbody >
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top" >
                  <td >
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td  >{tdata.project}</td>
                  <td   >
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td  >{tdata.weeks}</td>
                  <td  >{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;