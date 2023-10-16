let [a, op, b] = parse("1.2 * 3.4");

function parse(str) {
    let groups = str
        .match(/\s*(?<a>-?[0-9]+(?:\.[0-9]+){0,1})\s*(?<op>[-/*+//])\s*(?<b>-?[0-9]+(?:\.[0-9]+){0,1})\s*/)
        .groups;
    return [groups.a, groups.op, groups.b];
}