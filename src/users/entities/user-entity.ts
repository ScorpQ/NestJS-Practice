export class User {
    name: String;
    id: String;
}

// Entity class represent DB tables fields
// Ayrıca Entity ile DTO farkı ise şudur:

    // Entities are used to represent data in the database, 
    // while DTOs are used to represent data that is sent to or received from a client.

    // Yani Entity, DB'deki datanın bir sunumu gibi, senin table'ında ... data'ları
    // bulunmakta. İstersen null olabilir istersen required olabilir.
    // DTO ise, senin request payload'ında ... data'ları buluanbilir.
    // Birisi payload/client için birisi DB'deki table için.
