export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  phone: string;
  email: string;
  token: string;
  role: number;
  address: string;
  site: string;
  user: User;
}

// username = CharField(max_length=100)
// email = EmailField()
// password = CharField(max_length=100)
// name = CharField(max_length=100)
// phone = CharField(max_length=15)
// role = IntegerField()
// address = CharField()
// site = URLField()
