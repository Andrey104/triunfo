export class Service {
  id: number;
  name: string;
  price: number;
  description: string;
  date: string;
  time: string;
  type: number;
  priceT: string;

  details: string;
  rate: number;
  count: number;
  subtype: any;
}
// sub_type = ForeignKey(SubType, on_delete=PROTECT)
// provider = ForeignKey(CustomUser, on_delete=PROTECT)
// name = CharField(max_length=100)
// details = TextField()
// rate = IntegerField(default=0)
// count = IntegerField(null=True)
// price = DecimalField(**decimal_params)
