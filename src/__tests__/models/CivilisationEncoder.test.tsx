import {CivilisationEncoder} from "../../models/CivilisationEncoder";
import Civilisation from "../../models/Civilisation";

it('encode empty yields 0', () => {
    const encoded = CivilisationEncoder.encodeCivilisationArray([]);
    expect(encoded).toEqual(CivilisationEncoder.toHexString(0));
    expect(encoded).toEqual('0');
});

it('aztecs only yields 1', () => {
    const encoded = CivilisationEncoder.encodeCivilisationArray([Civilisation.AZTECS]);
    expect(encoded).toEqual(CivilisationEncoder.toHexString(1));
    expect(encoded).toEqual('1');
});

it('vikings only yields 2^30', () => {
    const encoded = CivilisationEncoder.encodeCivilisationArray([Civilisation.VIKINGS]);
    expect(encoded).toEqual(CivilisationEncoder.toHexString(Math.pow(2, 30)));
    expect(encoded).toEqual('40000000');
});

it('all 31 civs yield 2^31-1', () => {
    const encoded = CivilisationEncoder.encodeCivilisationArray(Civilisation.ALL);
    expect(Civilisation.ALL.length).toEqual(31);
    expect(encoded).toEqual(CivilisationEncoder.toHexString(Math.pow(2, 31) - 1));
    expect(encoded).toEqual('7fffffff');
});

it('decode 0 yields empty array', () => {
    const decoded = CivilisationEncoder.decodeCivilisationArray('0');
    expect(decoded).toEqual([]);
});

it('decode 1 yields aztecs', () => {
    const decoded = CivilisationEncoder.decodeCivilisationArray('1');
    expect(decoded).toEqual([Civilisation.AZTECS]);

});

it('decode 2^30 yields vikings', () => {
    const decoded = CivilisationEncoder.decodeCivilisationArray('40000000');
    expect(decoded).toEqual([Civilisation.VIKINGS]);

});

it('decode 2^31-1 yields all civs', () => {
    const decoded = CivilisationEncoder.decodeCivilisationArray('7fffffff');
    expect(decoded).toEqual(Civilisation.ALL);

});

it('decode invalid yields empty array', () => {
    const decoded = CivilisationEncoder.decodeCivilisationArray('invalid');
    expect(decoded).toEqual([]);
});

it('assert order of civilisations has not changed', () => {
    expect(Civilisation.ALL).toMatchSnapshot();
});
