public class Test {
    public static void main(String args[]) {
        int test = sum(5);
        System.out.println(test);
    }

    /*
    static int sum(int num) {
        int sum = 0;
        for (int i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    */

    static int sum(int num) {
        if (num == 1) {
            return 1;
        }
        return num + sum(num - 1);
    }

    // return 5 + 10
    // return 4 + 6
    // return 3 + 3
    // return 2 + 1


    // 5 + sum(4)
    // sum(4) = 4 + sum(3)
}
