export interface ComboZCharacter {
  _id?: Id;
  character: string;
  tag: string;
  icon: string;
  render: string;
}

export interface ComboZCombo {
  _id?: Id;
  uid?: Id;
  character: string;
  notation: (string | number)[][];
  damage: Damage;
  meterGain: MeterGain;
  worksOn: string;
  difficulty: string;
  notes: string;
}

export type Id = {
  $oid: string;
};

export type Damage = {
  $numberLong: string;
};

export type MeterGain = {
  $numberLong: string;
};