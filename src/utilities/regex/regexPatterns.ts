export default class RegexPatterns{

    public static testInput = (input:string , regex:any) => regex.test(input);
    
    public static email = /^([a-zA-Z._ğĞüÜşŞiİöÖçÇ\d]){1,}(?=@)@([a-zA-Z._ğĞüÜşŞiİöÖçÇ\d]){1,}(?=\.)\.([a-zA-Z_ğĞüÜşŞiİöÖçÇ\d]){2,4}$/;
    public static userName = /^[a-zA-ZğĞüÜşŞiİöÖçÇ]+$/;
    public static password = /^(?=.*[a-zğüşiöç])(?=.*[A-ZĞÜŞİÖÇ])(?=.*\W).{8,}$/
}