
# MacPorts Installer addition on 2010-10-04_at_20:44:34: adding an appropriate PATH variable for use with MacPorts.
export PATH=$PATH:/opt/local/bin:/opt/local/sbin:/Users/tdas/Projects/scala/bin
# Finished adapting your PATH environment variable for use with MacPorts.

source ~/.awskey

export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Home
export CLASSPATH=$CLASSPATH:.:/Users/tdas/Projects/spark/core/target/scala_2.8.1/Spark-Core-assembly-0.0.0.jar
export CLASSPATH=$CLASSPATH:/Users/tdas/Projects/sparkstream/netty-3.2.6.Final.jar

source ~/.bashrc
