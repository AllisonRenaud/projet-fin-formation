module.exports = {
    // operation's method
    get: {
      security: [{bearerAuth: []}],
      tags: ["Subject"], // operation's tag.
      description: "Get a subject {}", // operation's desc.
      parameters: [
        // expected params.
        {
          name: "_id", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/_id", // data model of the param
          },
          required: true, // Mandatory param
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Return subject and populated author path", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Subject",
              },
            },
          },
        },

        401: {
          description: "Authorization missing", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
        // response code
        404: {
          description: "Subject not found",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
        500: {
          description: "Server error", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
      },
    },
  };