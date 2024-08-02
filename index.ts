import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

type Guest = {
  id: string;
  firstName: string;
  lastName: string;
  deadline?: string;
  attending: boolean;
};

type RequestBodyPost = {
  body: { firstName: string; lastName: string; deadline?: string };
};

type RequestBodyPut = {
  params: { id: string };
  body: {
    firstName: string;
    lastName: string;
    deadline?: string;
    attending: boolean;
  };
};

type ResponseBody = Guest | { errors: { message: string }[] };

let id = 1;

const guestList: Guest[] = [];

// Enable CORS
app.use(function allowCrossDomainRequests(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  response.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  next();
});

// Get endpoints
app.get(
  '/',
  function rootHandler(
    request: Request,
    response: Response<{
      guests: string;
    }>,
  ) {
    response.json({
      guests: `${request.protocol}://${request.get('host')}/guests/`,
    });
  },
);

// Get all guests
app.get(
  '/guests',
  function getGuestsHandler(request: Request, response: Response<Guest[]>) {
    response.json(guestList);
  },
);

// New guest
app.post(
  '/guests',
  function postGuestsHandler(
    request: RequestBodyPost,
    response: Response<ResponseBody>,
  ) {
    if (!request.body.firstName || !request.body.lastName) {
      response.status(400).json({
        errors: [
          {
            message: 'Request body missing a firstName or lastName property',
          },
        ],
      });
      return;
    }

    if (Object.keys(request.body).length > 3) {
      response.status(400).json({
        errors: [
          {
            message:
              'Request body contains more than firstName, lastName and deadline properties',
          },
        ],
      });
      return;
    }

    const guest = {
      id: String(id++),
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      ...(request.body.deadline ? { deadline: request.body.deadline } : {}),
      attending: false,
    };

    guestList.push(guest);

    response.json(guest);
  },
);

// Get a single guest
app.get(
  '/guests/:id',
  function getGuestHandler(request: Request, response: Response<ResponseBody>) {
    const guest = guestList.find(
      (currentGuest) => currentGuest.id === request.params.id,
    );

    if (!guest) {
      response.status(404).json({
        errors: [{ message: `Guest ${request.params.id} not found` }],
      });
      return;
    }
    response.json(guest);
  },
);

// Modify a single guest
app.put(
  '/guests/:id',
  function putGuestHandler(
    request: RequestBodyPut,
    response: Response<ResponseBody>,
  ) {
    const allowedKeys = ['firstName', 'lastName', 'deadline', 'attending'];
    const difference = Object.keys(request.body).filter(
      (key) => !allowedKeys.includes(key),
    );

    if (difference.length > 0) {
      response.status(400).json({
        errors: [
          {
            message: `Request body contains more than allowed properties (${allowedKeys.join(
              ', ',
            )}). The request also contains these extra keys that are not allowed: ${difference.join(
              ', ',
            )}`,
          },
        ],
      });
      return;
    }

    const guest = guestList.find(
      (currentGuest) => currentGuest.id === request.params.id,
    );

    if (!guest) {
      response.status(404).json({
        errors: [{ message: `Guest ${request.params.id} not found` }],
      });
      return;
    }

    if (request.body.firstName) guest.firstName = request.body.firstName;
    if (request.body.lastName) guest.lastName = request.body.lastName;
    if (request.body.deadline) guest.deadline = request.body.deadline;
    if ('attending' in request.body) guest.attending = request.body.attending;
    response.json(guest);
  },
);

// Delete a single guest
app.delete(
  '/guests/:id',
  function deleteGuestHandler(
    request: Request,
    response: Response<ResponseBody>,
  ) {
    const guest = guestList.find(
      (currentGuest) => currentGuest.id === request.params.id,
    );

    if (!guest) {
      response.status(404).json({
        errors: [{ message: `Guest ${request.params.id} not found` }],
      });
      return;
    }

    guestList.splice(guestList.indexOf(guest), 1);
    response.json(guest);
  },
);

app.listen(process.env.PORT || 4000, () => {
  console.log('🚀 Guest list server started on http://localhost:4000');
});
